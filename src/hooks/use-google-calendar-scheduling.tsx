import { useEffect, useRef, RefObject, useCallback } from "react";

/**
 * Hook to add Google Calendar scheduling functionality to a button
 * 
 * This hook allows you to keep full control over your button's appearance
 * (text, styles, etc.) while adding Google Calendar appointment scheduling
 * functionality. When clicked, it opens Google Calendar in a popup window.
 * 
 * @param url - The Google Calendar appointment scheduling URL
 * @param openInPopup - Whether to open in a popup window (default: true)
 *                     If false, opens in the same window
 * 
 * @returns An object with:
 *   - ref: ref that should be attached to the target button
 *   - openCalendar: function to manually open the calendar (useful for onClick handlers)
 * 
 * @example
 * ```tsx
 * const { ref, openCalendar } = useGoogleCalendarScheduling(
 *   'https://calendar.google.com/calendar/appointments/schedules/...'
 * );
 * 
 * return (
 *   <button ref={ref} onClick={openCalendar}>
 *     Безкоштовна консультація
 *   </button>
 * );
 * ```
 */
export const useGoogleCalendarScheduling = <T extends HTMLElement = HTMLButtonElement>(
  url: string,
  openInPopup: boolean = true
): { ref: RefObject<T>; openCalendar: () => void } => {
  const targetRef = useRef<T>(null);

  const openCalendar = useCallback(() => {
    if (openInPopup) {
      // Open in popup window (modal-like experience)
      const width = 800;
      const height = 600;
      const left = (window.innerWidth - width) / 2 + window.screenX;
      const top = (window.innerHeight - height) / 2 + window.screenY;

      window.open(
        url,
        "Google Calendar Appointment",
        `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
      );
    } else {
      // Open in same window
      window.location.href = url;
    }
  }, [url, openInPopup]);

  useEffect(() => {
    if (!targetRef.current) return;

    const button = targetRef.current;
    
    // Add click handler to the button
    button.addEventListener("click", openCalendar);

    return () => {
      button.removeEventListener("click", openCalendar);
    };
  }, [openCalendar]);

  return { ref: targetRef, openCalendar };
};

