import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_guides_summary_format" AS ENUM('online', 'hybrid', 'offline');
  CREATE TYPE "public"."enum_guides_blocks_callout_type" AS ENUM('info', 'warning', 'alert', 'success');
  CREATE TYPE "public"."enum_guides_blocks_guide_step_difficulty" AS ENUM('easy', 'medium', 'hard');
  CREATE TYPE "public"."enum_guides_resources_type" AS ENUM('website', 'pdf', 'video', 'form');
  CREATE TYPE "public"."enum_guides_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__guides_v_version_summary_format" AS ENUM('online', 'hybrid', 'offline');
  CREATE TYPE "public"."enum__guides_v_blocks_callout_type" AS ENUM('info', 'warning', 'alert', 'success');
  CREATE TYPE "public"."enum__guides_v_blocks_guide_step_difficulty" AS ENUM('easy', 'medium', 'hard');
  CREATE TYPE "public"."enum__guides_v_version_resources_type" AS ENUM('website', 'pdf', 'video', 'form');
  CREATE TYPE "public"."enum__guides_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "guide_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"icon" varchar,
  	"order" numeric DEFAULT 0,
  	"color" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "guides_summary_format" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_guides_summary_format",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "guides_summary_requirements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"requirement" varchar
  );
  
  CREATE TABLE "guides_blocks_guide_step_required_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"document" varchar
  );
  
  CREATE TABLE "guides_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_guides_blocks_callout_type",
  	"title" varchar,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "guides_blocks_guide_step" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"content_html" varchar,
  	"estimated_time" varchar,
  	"difficulty" "enum_guides_blocks_guide_step_difficulty",
  	"block_name" varchar
  );
  
  CREATE TABLE "guides_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"url" varchar,
  	"type" "enum_guides_resources_type",
  	"description" varchar
  );
  
  CREATE TABLE "guides_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"answer_html" varchar
  );
  
  CREATE TABLE "guides" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"excerpt" varchar,
  	"category_id" integer,
  	"featured_image_id" integer,
  	"summary_total_cost" varchar,
  	"summary_estimated_duration" varchar,
  	"summary_last_updated" timestamp(3) with time zone,
  	"introduction" jsonb,
  	"introduction_html" varchar,
  	"conclusion" jsonb,
  	"conclusion_html" varchar,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"seo_meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_guides_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_guides_v_version_summary_format" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__guides_v_version_summary_format",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_guides_v_version_summary_requirements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"requirement" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guides_v_blocks_guide_step_required_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"document" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guides_v_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__guides_v_blocks_callout_type",
  	"title" varchar,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_guides_v_blocks_guide_step" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"content_html" varchar,
  	"estimated_time" varchar,
  	"difficulty" "enum__guides_v_blocks_guide_step_difficulty",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_guides_v_version_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"url" varchar,
  	"type" "enum__guides_v_version_resources_type",
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guides_v_version_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"answer_html" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guides_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_excerpt" varchar,
  	"version_category_id" integer,
  	"version_featured_image_id" integer,
  	"version_summary_total_cost" varchar,
  	"version_summary_estimated_duration" varchar,
  	"version_summary_last_updated" timestamp(3) with time zone,
  	"version_introduction" jsonb,
  	"version_introduction_html" varchar,
  	"version_conclusion" jsonb,
  	"version_conclusion_html" varchar,
  	"version_seo_meta_title" varchar,
  	"version_seo_meta_description" varchar,
  	"version_seo_meta_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__guides_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "guide_categories_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "guides_id" integer;
  ALTER TABLE "guides_summary_format" ADD CONSTRAINT "guides_summary_format_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides_summary_requirements" ADD CONSTRAINT "guides_summary_requirements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides_blocks_guide_step_required_documents" ADD CONSTRAINT "guides_blocks_guide_step_required_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guides_blocks_guide_step"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides_blocks_callout" ADD CONSTRAINT "guides_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides_blocks_guide_step" ADD CONSTRAINT "guides_blocks_guide_step_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides_resources" ADD CONSTRAINT "guides_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides_faqs" ADD CONSTRAINT "guides_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides" ADD CONSTRAINT "guides_category_id_guide_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."guide_categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guides" ADD CONSTRAINT "guides_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guides" ADD CONSTRAINT "guides_seo_meta_image_id_media_id_fk" FOREIGN KEY ("seo_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guides_v_version_summary_format" ADD CONSTRAINT "_guides_v_version_summary_format_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v_version_summary_requirements" ADD CONSTRAINT "_guides_v_version_summary_requirements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v_blocks_guide_step_required_documents" ADD CONSTRAINT "_guides_v_blocks_guide_step_required_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guides_v_blocks_guide_step"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v_blocks_callout" ADD CONSTRAINT "_guides_v_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v_blocks_guide_step" ADD CONSTRAINT "_guides_v_blocks_guide_step_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v_version_resources" ADD CONSTRAINT "_guides_v_version_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v_version_faqs" ADD CONSTRAINT "_guides_v_version_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v" ADD CONSTRAINT "_guides_v_parent_id_guides_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guides"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guides_v" ADD CONSTRAINT "_guides_v_version_category_id_guide_categories_id_fk" FOREIGN KEY ("version_category_id") REFERENCES "public"."guide_categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guides_v" ADD CONSTRAINT "_guides_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guides_v" ADD CONSTRAINT "_guides_v_version_seo_meta_image_id_media_id_fk" FOREIGN KEY ("version_seo_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE UNIQUE INDEX "guide_categories_slug_idx" ON "guide_categories" USING btree ("slug");
  CREATE INDEX "guide_categories_updated_at_idx" ON "guide_categories" USING btree ("updated_at");
  CREATE INDEX "guide_categories_created_at_idx" ON "guide_categories" USING btree ("created_at");
  CREATE INDEX "guides_summary_format_order_idx" ON "guides_summary_format" USING btree ("order");
  CREATE INDEX "guides_summary_format_parent_idx" ON "guides_summary_format" USING btree ("parent_id");
  CREATE INDEX "guides_summary_requirements_order_idx" ON "guides_summary_requirements" USING btree ("_order");
  CREATE INDEX "guides_summary_requirements_parent_id_idx" ON "guides_summary_requirements" USING btree ("_parent_id");
  CREATE INDEX "guides_blocks_guide_step_required_documents_order_idx" ON "guides_blocks_guide_step_required_documents" USING btree ("_order");
  CREATE INDEX "guides_blocks_guide_step_required_documents_parent_id_idx" ON "guides_blocks_guide_step_required_documents" USING btree ("_parent_id");
  CREATE INDEX "guides_blocks_callout_order_idx" ON "guides_blocks_callout" USING btree ("_order");
  CREATE INDEX "guides_blocks_callout_parent_id_idx" ON "guides_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "guides_blocks_callout_path_idx" ON "guides_blocks_callout" USING btree ("_path");
  CREATE INDEX "guides_blocks_guide_step_order_idx" ON "guides_blocks_guide_step" USING btree ("_order");
  CREATE INDEX "guides_blocks_guide_step_parent_id_idx" ON "guides_blocks_guide_step" USING btree ("_parent_id");
  CREATE INDEX "guides_blocks_guide_step_path_idx" ON "guides_blocks_guide_step" USING btree ("_path");
  CREATE INDEX "guides_resources_order_idx" ON "guides_resources" USING btree ("_order");
  CREATE INDEX "guides_resources_parent_id_idx" ON "guides_resources" USING btree ("_parent_id");
  CREATE INDEX "guides_faqs_order_idx" ON "guides_faqs" USING btree ("_order");
  CREATE INDEX "guides_faqs_parent_id_idx" ON "guides_faqs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "guides_slug_idx" ON "guides" USING btree ("slug");
  CREATE INDEX "guides_category_idx" ON "guides" USING btree ("category_id");
  CREATE INDEX "guides_featured_image_idx" ON "guides" USING btree ("featured_image_id");
  CREATE INDEX "guides_seo_seo_meta_image_idx" ON "guides" USING btree ("seo_meta_image_id");
  CREATE INDEX "guides_updated_at_idx" ON "guides" USING btree ("updated_at");
  CREATE INDEX "guides_created_at_idx" ON "guides" USING btree ("created_at");
  CREATE INDEX "guides__status_idx" ON "guides" USING btree ("_status");
  CREATE INDEX "_guides_v_version_summary_format_order_idx" ON "_guides_v_version_summary_format" USING btree ("order");
  CREATE INDEX "_guides_v_version_summary_format_parent_idx" ON "_guides_v_version_summary_format" USING btree ("parent_id");
  CREATE INDEX "_guides_v_version_summary_requirements_order_idx" ON "_guides_v_version_summary_requirements" USING btree ("_order");
  CREATE INDEX "_guides_v_version_summary_requirements_parent_id_idx" ON "_guides_v_version_summary_requirements" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_blocks_guide_step_required_documents_order_idx" ON "_guides_v_blocks_guide_step_required_documents" USING btree ("_order");
  CREATE INDEX "_guides_v_blocks_guide_step_required_documents_parent_id_idx" ON "_guides_v_blocks_guide_step_required_documents" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_blocks_callout_order_idx" ON "_guides_v_blocks_callout" USING btree ("_order");
  CREATE INDEX "_guides_v_blocks_callout_parent_id_idx" ON "_guides_v_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_blocks_callout_path_idx" ON "_guides_v_blocks_callout" USING btree ("_path");
  CREATE INDEX "_guides_v_blocks_guide_step_order_idx" ON "_guides_v_blocks_guide_step" USING btree ("_order");
  CREATE INDEX "_guides_v_blocks_guide_step_parent_id_idx" ON "_guides_v_blocks_guide_step" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_blocks_guide_step_path_idx" ON "_guides_v_blocks_guide_step" USING btree ("_path");
  CREATE INDEX "_guides_v_version_resources_order_idx" ON "_guides_v_version_resources" USING btree ("_order");
  CREATE INDEX "_guides_v_version_resources_parent_id_idx" ON "_guides_v_version_resources" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_version_faqs_order_idx" ON "_guides_v_version_faqs" USING btree ("_order");
  CREATE INDEX "_guides_v_version_faqs_parent_id_idx" ON "_guides_v_version_faqs" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_parent_idx" ON "_guides_v" USING btree ("parent_id");
  CREATE INDEX "_guides_v_version_version_slug_idx" ON "_guides_v" USING btree ("version_slug");
  CREATE INDEX "_guides_v_version_version_category_idx" ON "_guides_v" USING btree ("version_category_id");
  CREATE INDEX "_guides_v_version_version_featured_image_idx" ON "_guides_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_guides_v_version_seo_version_seo_meta_image_idx" ON "_guides_v" USING btree ("version_seo_meta_image_id");
  CREATE INDEX "_guides_v_version_version_updated_at_idx" ON "_guides_v" USING btree ("version_updated_at");
  CREATE INDEX "_guides_v_version_version_created_at_idx" ON "_guides_v" USING btree ("version_created_at");
  CREATE INDEX "_guides_v_version_version__status_idx" ON "_guides_v" USING btree ("version__status");
  CREATE INDEX "_guides_v_created_at_idx" ON "_guides_v" USING btree ("created_at");
  CREATE INDEX "_guides_v_updated_at_idx" ON "_guides_v" USING btree ("updated_at");
  CREATE INDEX "_guides_v_latest_idx" ON "_guides_v" USING btree ("latest");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_guide_categories_fk" FOREIGN KEY ("guide_categories_id") REFERENCES "public"."guide_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_guides_fk" FOREIGN KEY ("guides_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_guide_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("guide_categories_id");
  CREATE INDEX "payload_locked_documents_rels_guides_id_idx" ON "payload_locked_documents_rels" USING btree ("guides_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "guide_categories" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "guides_summary_format" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "guides_summary_requirements" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "guides_blocks_guide_step_required_documents" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "guides_blocks_callout" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "guides_blocks_guide_step" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "guides_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "guides_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "guides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_guides_v_version_summary_format" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_guides_v_version_summary_requirements" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_guides_v_blocks_guide_step_required_documents" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_guides_v_blocks_callout" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_guides_v_blocks_guide_step" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_guides_v_version_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_guides_v_version_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_guides_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "guide_categories" CASCADE;
  DROP TABLE "guides_summary_format" CASCADE;
  DROP TABLE "guides_summary_requirements" CASCADE;
  DROP TABLE "guides_blocks_guide_step_required_documents" CASCADE;
  DROP TABLE "guides_blocks_callout" CASCADE;
  DROP TABLE "guides_blocks_guide_step" CASCADE;
  DROP TABLE "guides_resources" CASCADE;
  DROP TABLE "guides_faqs" CASCADE;
  DROP TABLE "guides" CASCADE;
  DROP TABLE "_guides_v_version_summary_format" CASCADE;
  DROP TABLE "_guides_v_version_summary_requirements" CASCADE;
  DROP TABLE "_guides_v_blocks_guide_step_required_documents" CASCADE;
  DROP TABLE "_guides_v_blocks_callout" CASCADE;
  DROP TABLE "_guides_v_blocks_guide_step" CASCADE;
  DROP TABLE "_guides_v_version_resources" CASCADE;
  DROP TABLE "_guides_v_version_faqs" CASCADE;
  DROP TABLE "_guides_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_guide_categories_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_guides_fk";
  
  DROP INDEX "payload_locked_documents_rels_guide_categories_id_idx";
  DROP INDEX "payload_locked_documents_rels_guides_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "guide_categories_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "guides_id";
  DROP TYPE "public"."enum_guides_summary_format";
  DROP TYPE "public"."enum_guides_blocks_callout_type";
  DROP TYPE "public"."enum_guides_blocks_guide_step_difficulty";
  DROP TYPE "public"."enum_guides_resources_type";
  DROP TYPE "public"."enum_guides_status";
  DROP TYPE "public"."enum__guides_v_version_summary_format";
  DROP TYPE "public"."enum__guides_v_blocks_callout_type";
  DROP TYPE "public"."enum__guides_v_blocks_guide_step_difficulty";
  DROP TYPE "public"."enum__guides_v_version_resources_type";
  DROP TYPE "public"."enum__guides_v_version_status";`)
}
