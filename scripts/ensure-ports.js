#!/usr/bin/env node
/**
 * Simple helper that makes sure dev ports are free before starting servers.
 *
 * - Checks ports 3001 and 8080 (override with PORTS env, comma separated)
 * - Attempts to terminate Node.js processes that occupy those ports
 * - Warns if the port is held by a non-Node process so you can handle it manually
 */

import { execSync } from 'node:child_process';

const ports = process.env.PORTS ? process.env.PORTS.split(',') : ['3001', '8080'];

function killNodeListeners(port) {
  let killedAny = false;

  try {
    const pidsRaw = execSync(`lsof -ti tcp:${port} -sTCP:LISTEN`, { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();

    if (!pidsRaw) {
      return { killedAny, hasListeners: false };
    }

    const pids = [...new Set(pidsRaw.split('\n').map((pid) => pid.trim()).filter(Boolean))];

    for (const pid of pids) {
      try {
        // Отримуємо назву процесу, щоб попередити, якщо це не Node
        const command = execSync(`ps -p ${pid} -o comm=`, { stdio: ['ignore', 'pipe', 'ignore'] })
          .toString()
          .trim();

        if (!command.toLowerCase().includes('node')) {
          console.warn(`⚠️  Port ${port} зайнятий процесом ${command} (PID ${pid}). Не зупиняю його автоматично.`);
          return { killedAny, hasListeners: true };
        }

        process.stdout.write(`🔧 Завершую процес Node PID ${pid}, що слухає порт ${port}...\n`);
        execSync(`kill ${pid}`);
        killedAny = true;
      } catch (killError) {
        console.warn(`⚠️  Не вдалося завершити процес PID ${pid}: ${killError.message}`);
      }
    }

    return { killedAny, hasListeners: true };
  } catch (error) {
    // lsof повертає код 1, якщо процесів немає — це окей
    if (error.status === 1) {
      return { killedAny, hasListeners: false };
    }

    console.error(`❌  Не вдалося перевірити порт ${port}: ${error.message}`);
    return { killedAny, hasListeners: false };
  }
}

let hadManualAction = false;

for (const port of ports) {
  const { killedAny, hasListeners } = killNodeListeners(port);

  if (!hasListeners) {
    console.log(`✅ Порт ${port} вільний`);
  } else if (killedAny) {
    console.log(`✅ Порт ${port} звільнений`);
  } else {
    hadManualAction = true;
  }
}

if (hadManualAction) {
  console.warn('\n⚠️  Деякі порти залишилися зайнятими не-Node процесами. Звільни їх вручну перед запуском dev-серверів.');
  process.exitCode = 1;
} else {
  console.log('\n🚀 Порти готові. Можна запускати dev-сервери.');
}

