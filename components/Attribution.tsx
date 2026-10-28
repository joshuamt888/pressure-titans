"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/** Renders nothing. Remembers the visitor's ad tags and landing page so the quote form can send them along. */
export default function Attribution() {
  useEffect(() => { captureAttribution(); }, []);
  return null;
}
