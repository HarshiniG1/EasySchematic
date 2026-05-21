/**
 * uOttawa AV Equipment Library
 * University of Ottawa – Mediaservices / AV Team
 *
 * Structure:
 *   Each top-level vendor is a group of deviceTypes prefixed with "uottawa-<vendor>-".
 *   Sub-categories use the label field to distinguish (e.g. "Crestron – Audio" vs "Crestron – NVX").
 *   All entries share category: "uOttawa" (assigned via deviceTypeCategories.ts).
 *
 *   Vendors covered:
 *     AUDINATE · BIAMP · CRESTRON (8 sub-groups) · EXTRON
 *     SENNHEISER · SHURE · DELL (5 sub-groups) · SHARP
 *     EPSON · TEAMBOARD · SAMSUNG · QSC · TELEVIC
 *     HUDDLY · LEGACY (Kramer / WolfVision / Epiphany / Panasonic)
 *     MISC (Adapters)
 */

import { port, ports } from "./_helpers";
import type { DeviceTemplate } from "../types";

export const templates: DeviceTemplate[] = [

  // ═══════════════════════════════════════════════════════════════
  // AUDINATE
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-audinate-dante-controller",
    label: "Audinate – Dante Controller",
    manufacturer: "Audinate",
    searchTerms: ["audinate", "dante", "controller", "uottawa"],
    ports: [
      port("Primary", "dante", "bidirectional"),
      port("Secondary", "dante", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
    ],
  },
  {
    deviceType: "uottawa-audinate-dante-gateway",
    label: "Audinate – Dante Gateway",
    manufacturer: "Audinate",
    searchTerms: ["audinate", "dante", "gateway", "analog", "bridge", "uottawa"],
    ports: [
      port("Dante Primary", "dante", "bidirectional"),
      port("Analog In L", "analog-audio", "input"),
      port("Analog In R", "analog-audio", "input"),
      port("Analog Out L", "analog-audio", "output"),
      port("Analog Out R", "analog-audio", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-audinate-dante-avio-usb",
    label: "Audinate – Dante AVIO USB",
    manufacturer: "Audinate",
    searchTerms: ["audinate", "dante", "avio", "usb", "adapter", "uottawa"],
    ports: [
      port("USB", "usb", "bidirectional"),
      port("Dante", "dante", "bidirectional"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // BIAMP
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-biamp-tesira-server",
    label: "Biamp – Tesira Server",
    manufacturer: "Biamp",
    searchTerms: ["biamp", "tesira", "server", "dsp", "uottawa"],
    ports: [
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      ...ports("Analog In", "analog-audio", "input", 4),
      ...ports("Analog Out", "analog-audio", "output", 4),
      port("AEC In", "analog-audio", "input"),
      port("Control Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-biamp-tesira-forte",
    label: "Biamp – Tesira FORTE",
    manufacturer: "Biamp",
    searchTerms: ["biamp", "tesira", "forte", "dsp", "uottawa"],
    ports: [
      port("Dante", "dante", "bidirectional"),
      ...ports("Analog In", "analog-audio", "input", 2),
      ...ports("Analog Out", "analog-audio", "output", 2),
      port("USB", "usb", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-biamp-devio",
    label: "Biamp – Devio",
    manufacturer: "Biamp",
    searchTerms: ["biamp", "devio", "byod", "usb", "uottawa"],
    ports: [
      port("USB", "usb", "bidirectional"),
      port("HDMI Out", "hdmi", "output"),
      port("Dante", "dante", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-biamp-parlé",
    label: "Biamp – Parlé Mic",
    manufacturer: "Biamp",
    searchTerms: ["biamp", "parle", "microphone", "conferencing", "uottawa"],
    ports: [
      port("Dante", "dante", "output"),
      port("PoE Ethernet", "ethernet", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CRESTRON – Audio
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-crestron-audio-dsp",
    label: "Crestron – Audio DSP",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "audio", "dsp", "uottawa"],
    ports: [
      port("Dante", "dante", "bidirectional"),
      ...ports("Analog In", "analog-audio", "input", 2),
      ...ports("Analog Out", "analog-audio", "output", 2),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-crestron-audio-amplifier",
    label: "Crestron – Amplifier",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "audio", "amplifier", "amp", "uottawa"],
    ports: [
      port("Analog In L", "analog-audio", "input"),
      port("Analog In R", "analog-audio", "input"),
      port("Speaker Out L", "speaker-level", "output"),
      port("Speaker Out R", "speaker-level", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-crestron-audio-table-top",
    label: "Crestron – Table Top Audio",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "audio", "table", "speakerphone", "uottawa"],
    ports: [
      port("Dante", "dante", "bidirectional"),
      port("USB", "usb", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CRESTRON – BYOD
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-crestron-byod-airmedia",
    label: "Crestron – AirMedia",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "byod", "airmedia", "wireless", "uottawa"],
    ports: [
      port("HDMI Out", "hdmi", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-crestron-byod-mercury",
    label: "Crestron – Mercury (BYOD)",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "byod", "mercury", "huddle", "wireless", "uottawa"],
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("HDMI Out", "hdmi", "output"),
      port("USB", "usb", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CRESTRON – Unified Communications
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-crestron-uc-teams",
    label: "Crestron – UC (Teams / Zoom)",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "uc", "teams", "zoom", "unified", "conferencing", "uottawa"],
    ports: [
      port("HDMI In", "hdmi", "input"),
      ...ports("HDMI Out", "hdmi", "output", 2),
      port("USB", "usb", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("Dante", "dante", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-crestron-uc-touch",
    label: "Crestron – UC Touch Panel",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "uc", "touch", "panel", "conferencing", "uottawa"],
    ports: [
      port("USB", "usb", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("PoE", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CRESTRON – HDMI Tools
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-crestron-hdmi-switcher",
    label: "Crestron – HDMI Switcher",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "hdmi", "switcher", "matrix", "uottawa"],
    ports: [
      ...ports("HDMI In", "hdmi", "input", 4),
      ...ports("HDMI Out", "hdmi", "output", 2),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-crestron-hdmi-da",
    label: "Crestron – HDMI DA",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "hdmi", "distribution", "da", "amplifier", "uottawa"],
    ports: [
      port("HDMI In", "hdmi", "input"),
      ...ports("HDMI Out", "hdmi", "output", 4),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-crestron-hdmi-extender",
    label: "Crestron – HDMI Extender",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "hdmi", "extender", "hdbaset", "uottawa"],
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("HDMI Out", "hdmi", "output"),
      port("HDBaseT", "hdbaset", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CRESTRON – Control
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-crestron-control-processor",
    label: "Crestron – Control Processor",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "control", "processor", "cp4", "cp3", "uottawa"],
    ports: [
      port("Cresnet", "cresnet", "bidirectional"),
      ...ports("COM", "serial", "bidirectional", 2),
      ...ports("IR", "ir", "output", 2),
      port("Ethernet", "ethernet", "bidirectional"),
      port("USB", "usb", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-crestron-control-touchpanel",
    label: "Crestron – Touch Panel",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "control", "touch", "panel", "tss", "tsw", "uottawa"],
    ports: [
      port("Cresnet", "cresnet", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("PoE", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-crestron-control-relay",
    label: "Crestron – Relay / I/O Module",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "control", "relay", "io", "gpio", "uottawa"],
    ports: [
      port("Cresnet", "cresnet", "bidirectional"),
      ...ports("Relay", "contact-closure", "output", 4),
      ...ports("Digital In", "gpio", "input", 4),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CRESTRON – NVX
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-crestron-nvx-encoder",
    label: "Crestron – NVX Encoder",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "nvx", "encoder", "av over ip", "4k", "uottawa"],
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("Analog Audio In", "analog-audio", "input"),
      port("Dante", "dante", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("PoE", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-crestron-nvx-decoder",
    label: "Crestron – NVX Decoder",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "nvx", "decoder", "av over ip", "4k", "uottawa"],
    ports: [
      port("HDMI Out", "hdmi", "output"),
      port("Analog Audio Out", "analog-audio", "output"),
      port("Dante", "dante", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("PoE", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CRESTRON – Camera
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-crestron-camera-ptz",
    label: "Crestron – PTZ Camera",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "camera", "ptz", "uottawa"],
    ports: [
      port("HDMI Out", "hdmi", "output"),
      port("USB Out", "usb", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("PoE", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-crestron-camera-huddly-bundle",
    label: "Crestron – Camera Bundle",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "camera", "bundle", "uottawa"],
    ports: [
      port("USB Out", "usb", "output"),
      port("HDMI Out", "hdmi", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CRESTRON – Misc.
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-crestron-misc-poe-injector",
    label: "Crestron – PoE Injector",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "poe", "injector", "misc", "uottawa"],
    ports: [
      port("Ethernet In", "ethernet", "input"),
      port("Ethernet Out (PoE)", "ethernet", "output"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-crestron-misc-dm-card",
    label: "Crestron – DM Expansion Card",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "dm", "digitalmedia", "card", "misc", "uottawa"],
    ports: [
      port("DM In", "hdmi", "input"),
      port("DM Out", "hdmi", "output"),
    ],
  },
  {
    deviceType: "uottawa-crestron-misc-power-supply",
    label: "Crestron – Power Supply",
    manufacturer: "Crestron",
    searchTerms: ["crestron", "power", "supply", "misc", "uottawa"],
    ports: [
      port("AC Input", "power", "input"),
      port("Cresnet Out", "cresnet", "output"),
      ...ports("DC Out", "power", "output", 2),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // EXTRON
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-extron-switcher",
    label: "Extron – Switcher / Matrix",
    manufacturer: "Extron",
    searchTerms: ["extron", "switcher", "matrix", "uottawa"],
    ports: [
      ...ports("HDMI In", "hdmi", "input", 4),
      ...ports("HDMI Out", "hdmi", "output", 2),
      port("Ethernet", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-extron-scaler",
    label: "Extron – Scaler",
    manufacturer: "Extron",
    searchTerms: ["extron", "scaler", "signal", "processor", "uottawa"],
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("VGA In", "vga", "input"),
      port("HDMI Out", "hdmi", "output"),
      port("RS-232", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-extron-da",
    label: "Extron – Distribution Amp",
    manufacturer: "Extron",
    searchTerms: ["extron", "distribution", "amplifier", "da", "uottawa"],
    ports: [
      port("HDMI In", "hdmi", "input"),
      ...ports("HDMI Out", "hdmi", "output", 4),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-extron-controller",
    label: "Extron – Control Processor",
    manufacturer: "Extron",
    searchTerms: ["extron", "control", "processor", "iplink", "uottawa"],
    ports: [
      port("Ethernet", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("IR", "ir", "output"),
      port("Relay", "contact-closure", "output"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-extron-dtp",
    label: "Extron – DTP Extender",
    manufacturer: "Extron",
    searchTerms: ["extron", "dtp", "hdbaset", "extender", "uottawa"],
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("HDMI Out", "hdmi", "output"),
      port("DTP (CAT)", "hdbaset", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // SENNHEISER
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-sennheiser-ew-wireless",
    label: "Sennheiser – EW Wireless Receiver",
    manufacturer: "Sennheiser",
    searchTerms: ["sennheiser", "ew", "wireless", "microphone", "receiver", "uottawa"],
    ports: [
      port("RF In", "rf", "input"),
      port("Analog Out L", "analog-audio", "output"),
      port("Analog Out R", "analog-audio", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-sennheiser-team-connect",
    label: "Sennheiser – TeamConnect Ceiling",
    manufacturer: "Sennheiser",
    searchTerms: ["sennheiser", "teamconnect", "ceiling", "conference", "mic", "uottawa"],
    ports: [
      port("Dante", "dante", "output"),
      port("PoE Ethernet", "ethernet", "input"),
    ],
  },
  {
    deviceType: "uottawa-sennheiser-speakerphone",
    label: "Sennheiser – SP Speakerphone",
    manufacturer: "Sennheiser",
    searchTerms: ["sennheiser", "sp", "speakerphone", "usb", "bluetooth", "uottawa"],
    ports: [
      port("USB", "usb", "bidirectional"),
      port("Bluetooth", "bluetooth", "bidirectional"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // SHURE
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-shure-ulxd",
    label: "Shure – ULXD Wireless Receiver",
    manufacturer: "Shure",
    searchTerms: ["shure", "ulxd", "wireless", "receiver", "microphone", "uottawa"],
    ports: [
      port("RF In", "rf", "input"),
      port("Analog Out", "analog-audio", "output"),
      port("AES Out", "aes", "output"),
      port("Dante", "dante", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-shure-mxa",
    label: "Shure – MXA Ceiling/Array Mic",
    manufacturer: "Shure",
    searchTerms: ["shure", "mxa", "ceiling", "array", "microphone", "dante", "uottawa"],
    ports: [
      port("Dante", "dante", "output"),
      port("PoE Ethernet", "ethernet", "input"),
    ],
  },
  {
    deviceType: "uottawa-shure-p300",
    label: "Shure – P300 IntelliMix DSP",
    manufacturer: "Shure",
    searchTerms: ["shure", "p300", "intellimix", "dsp", "conferencing", "uottawa"],
    ports: [
      port("Dante", "dante", "bidirectional"),
      port("USB", "usb", "bidirectional"),
      port("Analog In", "analog-audio", "input"),
      port("Analog Out", "analog-audio", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-shure-mx-wired",
    label: "Shure – MX Wired Mic",
    manufacturer: "Shure",
    searchTerms: ["shure", "mx", "wired", "microphone", "gooseneck", "uottawa"],
    ports: [
      port("XLR Out", "analog-audio", "output"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // DELL – PC
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-dell-pc-optiplex",
    label: "Dell – OptiPlex PC",
    manufacturer: "Dell",
    searchTerms: ["dell", "optiplex", "pc", "desktop", "computer", "uottawa"],
    ports: [
      port("DisplayPort Out", "displayport", "output"),
      port("HDMI Out", "hdmi", "output"),
      port("USB-A", "usb", "bidirectional"),
      port("USB-C", "usb", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("Headphone / Line Out", "analog-audio", "output"),
      port("Line In / Mic", "analog-audio", "input"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-dell-pc-workstation",
    label: "Dell – Precision Workstation",
    manufacturer: "Dell",
    searchTerms: ["dell", "precision", "workstation", "pc", "uottawa"],
    ports: [
      ...ports("DisplayPort Out", "displayport", "output", 2),
      port("USB-C / TB", "usb", "bidirectional"),
      ...ports("USB-A", "usb", "bidirectional", 2),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // DELL – Display
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-dell-display-monitor",
    label: "Dell – Monitor",
    manufacturer: "Dell",
    searchTerms: ["dell", "monitor", "display", "screen", "uottawa"],
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("DisplayPort In", "displayport", "input"),
      port("USB-C In", "usb", "input"),
      port("USB Hub Out", "usb", "output"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-dell-display-interactive",
    label: "Dell – Interactive Display",
    manufacturer: "Dell",
    searchTerms: ["dell", "interactive", "display", "touch", "uottawa"],
    ports: [
      ...ports("HDMI In", "hdmi", "input", 2),
      port("USB-C In", "usb", "input"),
      port("USB-A Out (Touch)", "usb", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // DELL – Accessories
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-dell-accessory-dock",
    label: "Dell – Docking Station",
    manufacturer: "Dell",
    searchTerms: ["dell", "dock", "docking", "thunderbolt", "usb-c", "uottawa"],
    ports: [
      port("USB-C / TB In", "usb", "input"),
      ...ports("USB-A Out", "usb", "output", 3),
      port("HDMI Out", "hdmi", "output"),
      port("DisplayPort Out", "displayport", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-dell-accessory-webcam",
    label: "Dell – Webcam",
    manufacturer: "Dell",
    searchTerms: ["dell", "webcam", "camera", "usb", "uottawa"],
    ports: [
      port("USB", "usb", "output"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // DELL – Legacy PCs
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-dell-legacy-vostro",
    label: "Dell – Vostro (Legacy)",
    manufacturer: "Dell",
    searchTerms: ["dell", "vostro", "legacy", "pc", "uottawa"],
    ports: [
      port("VGA Out", "vga", "output"),
      port("HDMI Out", "hdmi", "output"),
      port("USB-A", "usb", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-dell-legacy-optiplex-old",
    label: "Dell – OptiPlex (Legacy)",
    manufacturer: "Dell",
    searchTerms: ["dell", "optiplex", "legacy", "old", "uottawa"],
    ports: [
      port("VGA Out", "vga", "output"),
      port("DisplayPort Out", "displayport", "output"),
      port("USB-A", "usb", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // DELL – Misc.
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-dell-misc-kvm",
    label: "Dell – KVM Switch",
    manufacturer: "Dell",
    searchTerms: ["dell", "kvm", "switch", "misc", "uottawa"],
    ports: [
      ...ports("USB-B In", "usb", "input", 2),
      port("USB-A Out (KB/Mouse)", "usb", "output"),
      port("HDMI In 1", "hdmi", "input"),
      port("HDMI In 2", "hdmi", "input"),
      port("HDMI Out", "hdmi", "output"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-dell-misc-cable-mgmt",
    label: "Dell – Cable Management",
    manufacturer: "Dell",
    searchTerms: ["dell", "cable", "management", "misc", "uottawa"],
    ports: [
      port("Pass-Through", "custom", "passthrough"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // SHARP
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-sharp-aquos-display",
    label: "Sharp – AQUOS Display",
    manufacturer: "Sharp",
    searchTerms: ["sharp", "aquos", "display", "tv", "uottawa"],
    ports: [
      ...ports("HDMI In", "hdmi", "input", 3),
      port("VGA In", "vga", "input"),
      port("USB-A", "usb", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-sharp-interactive",
    label: "Sharp – Interactive Whiteboard",
    manufacturer: "Sharp",
    searchTerms: ["sharp", "interactive", "whiteboard", "touch", "pen", "uottawa"],
    ports: [
      ...ports("HDMI In", "hdmi", "input", 2),
      port("USB-C In", "usb", "input"),
      port("USB-A (Touch)", "usb", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // EPSON
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-epson-projector",
    label: "Epson – Projector",
    manufacturer: "Epson",
    searchTerms: ["epson", "projector", "lcd", "uottawa"],
    ports: [
      ...ports("HDMI In", "hdmi", "input", 2),
      port("VGA In", "vga", "input"),
      port("HDBaseT In", "hdbaset", "input"),
      port("USB-A", "usb", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-epson-short-throw",
    label: "Epson – Short Throw Projector",
    manufacturer: "Epson",
    searchTerms: ["epson", "short throw", "projector", "uottawa"],
    ports: [
      ...ports("HDMI In", "hdmi", "input", 2),
      port("VGA In", "vga", "input"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // TEAMBOARD
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-teamboard-interactive",
    label: "Teamboard – Interactive Display",
    manufacturer: "Teamboard",
    searchTerms: ["teamboard", "interactive", "display", "whiteboard", "uottawa"],
    ports: [
      ...ports("HDMI In", "hdmi", "input", 2),
      port("USB-C In", "usb", "input"),
      port("USB-A (Touch)", "usb", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("Wi-Fi", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-teamboard-ots",
    label: "Teamboard – OTS Overlay",
    manufacturer: "Teamboard",
    searchTerms: ["teamboard", "ots", "overlay", "touch", "uottawa"],
    ports: [
      port("USB (Touch)", "usb", "output"),
      port("HDMI In", "hdmi", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // SAMSUNG
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-samsung-display",
    label: "Samsung – Commercial Display",
    manufacturer: "Samsung",
    searchTerms: ["samsung", "display", "commercial", "qm", "pm", "uottawa"],
    ports: [
      ...ports("HDMI In", "hdmi", "input", 3),
      port("DisplayPort In", "displayport", "input"),
      port("USB-C In", "usb", "input"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-samsung-smartboard",
    label: "Samsung – Flip / Interactive",
    manufacturer: "Samsung",
    searchTerms: ["samsung", "flip", "interactive", "smartboard", "touch", "uottawa"],
    ports: [
      ...ports("HDMI In", "hdmi", "input", 2),
      port("USB-C In", "usb", "input"),
      port("USB-A Out", "usb", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("Wi-Fi", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // QSC
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-qsc-core",
    label: "QSC – Q-SYS Core",
    manufacturer: "QSC",
    searchTerms: ["qsc", "qsys", "core", "dsp", "processor", "uottawa"],
    ports: [
      ...ports("Analog In", "analog-audio", "input", 4),
      ...ports("Analog Out", "analog-audio", "output", 4),
      port("Dante", "dante", "bidirectional"),
      port("AES67", "aes67", "bidirectional"),
      port("Control Ethernet", "ethernet", "bidirectional"),
      port("AV Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-qsc-amplifier",
    label: "QSC – Amplifier",
    manufacturer: "QSC",
    searchTerms: ["qsc", "amplifier", "amp", "cinema", "uottawa"],
    ports: [
      port("Dante In", "dante", "input"),
      port("Analog In L", "analog-audio", "input"),
      port("Analog In R", "analog-audio", "input"),
      ...ports("Speaker Out", "speaker-level", "output", 2),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-qsc-touchscreen",
    label: "QSC – Q-SYS Touch Screen",
    manufacturer: "QSC",
    searchTerms: ["qsc", "qsys", "touch", "screen", "control", "uottawa"],
    ports: [
      port("PoE Ethernet", "ethernet", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // TELEVIC
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-televic-plixus-engine",
    label: "Televic – Plixus Engine",
    manufacturer: "Televic",
    searchTerms: ["televic", "plixus", "engine", "conference", "uottawa"],
    ports: [
      port("Dante", "dante", "bidirectional"),
      port("Plixus (CAT)", "ethernet", "bidirectional"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("GPIO", "gpio", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-televic-plixus-unit",
    label: "Televic – Plixus Conference Unit",
    manufacturer: "Televic",
    searchTerms: ["televic", "plixus", "conference", "delegate", "microphone", "uottawa"],
    ports: [
      port("Plixus In", "ethernet", "input"),
      port("Plixus Out (loop)", "ethernet", "output"),
      port("Headphone Out", "analog-audio", "output"),
    ],
  },
  {
    deviceType: "uottawa-televic-plixus-interpreter",
    label: "Televic – Interpreter Desk",
    manufacturer: "Televic",
    searchTerms: ["televic", "interpreter", "simultaneous", "translation", "uottawa"],
    ports: [
      port("Plixus In", "ethernet", "input"),
      port("Plixus Out", "ethernet", "output"),
      port("Headphone Out", "analog-audio", "output"),
      port("Mic In", "analog-audio", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // HUDDLY
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-huddly-iq",
    label: "Huddly – IQ Camera",
    manufacturer: "Huddly",
    searchTerms: ["huddly", "iq", "camera", "wide", "angle", "usb", "uottawa"],
    ports: [
      port("USB-C Out", "usb", "output"),
    ],
  },
  {
    deviceType: "uottawa-huddly-go",
    label: "Huddly – GO Camera",
    manufacturer: "Huddly",
    searchTerms: ["huddly", "go", "camera", "usb", "conferencing", "uottawa"],
    ports: [
      port("USB Out", "usb", "output"),
    ],
  },
  {
    deviceType: "uottawa-huddly-l1",
    label: "Huddly – L1 Intelligent Camera",
    manufacturer: "Huddly",
    searchTerms: ["huddly", "l1", "camera", "ptz", "ai", "uottawa"],
    ports: [
      port("HDMI Out", "hdmi", "output"),
      port("USB-C Out", "usb", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("PoE", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEGACY – Kramer
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-legacy-kramer-switcher",
    label: "Kramer – Switcher (Legacy)",
    manufacturer: "Kramer",
    searchTerms: ["kramer", "switcher", "legacy", "hdmi", "uottawa"],
    ports: [
      ...ports("HDMI In", "hdmi", "input", 4),
      port("HDMI Out", "hdmi", "output"),
      port("RS-232", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-legacy-kramer-extender",
    label: "Kramer – Extender (Legacy)",
    manufacturer: "Kramer",
    searchTerms: ["kramer", "extender", "hdbaset", "cat", "legacy", "uottawa"],
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("HDMI Out", "hdmi", "output"),
      port("HDBaseT", "hdbaset", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEGACY – WolfVision
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-legacy-wolfvision-visualizer",
    label: "WolfVision – Visualizer (Legacy)",
    manufacturer: "WolfVision",
    searchTerms: ["wolfvision", "visualizer", "document", "camera", "legacy", "uottawa"],
    ports: [
      port("HDMI Out", "hdmi", "output"),
      port("VGA Out", "vga", "output"),
      port("USB Out", "usb", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEGACY – Epiphan
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-legacy-epiphan-capture",
    label: "Epiphan – Capture Card (Legacy)",
    manufacturer: "Epiphan",
    searchTerms: ["epiphan", "capture", "card", "lecture", "recording", "legacy", "uottawa"],
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("VGA In", "vga", "input"),
      port("Analog Audio In", "analog-audio", "input"),
      port("USB Out", "usb", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEGACY – Panasonic
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-legacy-panasonic-projector",
    label: "Panasonic – Projector (Legacy)",
    manufacturer: "Panasonic",
    searchTerms: ["panasonic", "projector", "legacy", "uottawa"],
    ports: [
      ...ports("HDMI In", "hdmi", "input", 2),
      port("VGA In", "vga", "input"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },
  {
    deviceType: "uottawa-legacy-panasonic-camera",
    label: "Panasonic – PTZ Camera (Legacy)",
    manufacturer: "Panasonic",
    searchTerms: ["panasonic", "ptz", "camera", "legacy", "uottawa"],
    ports: [
      port("HDMI Out", "hdmi", "output"),
      port("Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // MISC – Adapters
  // ═══════════════════════════════════════════════════════════════
  {
    deviceType: "uottawa-misc-adapter-hdmi-vga",
    label: "Adapter – HDMI → VGA",
    manufacturer: undefined,
    searchTerms: ["adapter", "hdmi", "vga", "dongle", "misc", "uottawa"],
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("VGA Out", "vga", "output"),
    ],
  },
  {
    deviceType: "uottawa-misc-adapter-usbc-hdmi",
    label: "Adapter – USB-C → HDMI",
    manufacturer: undefined,
    searchTerms: ["adapter", "usb-c", "hdmi", "dongle", "misc", "uottawa"],
    ports: [
      port("USB-C In", "usb", "input"),
      port("HDMI Out", "hdmi", "output"),
    ],
  },
  {
    deviceType: "uottawa-misc-adapter-dp-hdmi",
    label: "Adapter – DP → HDMI",
    manufacturer: undefined,
    searchTerms: ["adapter", "displayport", "dp", "hdmi", "misc", "uottawa"],
    ports: [
      port("DisplayPort In", "displayport", "input"),
      port("HDMI Out", "hdmi", "output"),
    ],
  },
  {
    deviceType: "uottawa-misc-adapter-minidp-hdmi",
    label: "Adapter – Mini DP → HDMI",
    manufacturer: undefined,
    searchTerms: ["adapter", "mini displayport", "dp", "hdmi", "apple", "misc", "uottawa"],
    ports: [
      port("Mini DP In", "displayport", "input"),
      port("HDMI Out", "hdmi", "output"),
    ],
  },
  {
    deviceType: "uottawa-misc-adapter-usba-ethernet",
    label: "Adapter – USB-A → Ethernet",
    manufacturer: undefined,
    searchTerms: ["adapter", "usb", "ethernet", "network", "misc", "uottawa"],
    ports: [
      port("USB-A In", "usb", "input"),
      port("Ethernet Out", "ethernet", "output"),
    ],
  },
  {
    deviceType: "uottawa-misc-hdmi-cable",
    label: "HDMI Cable",
    manufacturer: undefined,
    searchTerms: ["hdmi", "cable", "misc", "uottawa"],
    ports: [
      port("HDMI A", "hdmi", "passthrough"),
      port("HDMI B", "hdmi", "passthrough"),
    ],
  },
];
