import Gauge from "@/components/icon/components/svg/gauge.svg?raw"
import Bell from "@/components/icon/components/svg/bell.svg?raw"
import Microchip from "@/components/icon/components/svg/microchip.svg?raw"
import BoxArchive from "@/components/icon/components/svg/box-archive.svg?raw"
import Eye from "@/components/icon/components/svg/eye.svg?raw"
import EyeSlash from "@/components/icon/components/svg/eye-slash.svg?raw"
import CircleNotch from "@/components/icon/components/svg/circle-notch.svg?raw"
import Google from "@/components/icon/components/svg/google.svg?raw"
import ChevronRight from "@/components/icon/components/svg/chevron-right.svg?raw"
import Plus from "@/components/icon/components/svg/plus.svg?raw"
import Xmark from "@/components/icon/components/svg/xmark.svg?raw"
import CircleCheck from "@/components/icon/components/svg/circle-check.svg?raw"
import CircleExclamation from "@/components/icon/components/svg/circle-exclamation.svg?raw"
import CircleXmark from "@/components/icon/components/svg/circle-xmark.svg?raw"
import CircleUser from "@/components/icon/components/svg/circle-user.svg?raw"
import Sun from "@/components/icon/components/svg/sun.svg?raw"
import Moon from "@/components/icon/components/svg/moon.svg?raw"
import EllipsisVertical from "@/components/icon/components/svg/ellipsis-vertical.svg?raw"
import Trash from "@/components/icon/components/svg/trash.svg?raw"
import RightFromBracket from "@/components/icon/components/svg/right-from-bracket.svg?raw"
import PenToSquare from "@/components/icon/components/svg/pen-to-square.svg?raw"
import Bars from "@/components/icon/components/svg/bars.svg?raw"
import Play from "@/components/icon/components/svg/play.svg?raw"
import Database from "@/components/icon/components/svg/database.svg?raw"
import Signal from "@/components/icon/components/svg/signal.svg?raw"

const icons = {
  gauge: Gauge,
  bell: Bell,
  microchip: Microchip,
  box_archive: BoxArchive,
  eye: Eye,
  eye_slash: EyeSlash,
  circle_notch: CircleNotch,
  google: Google,
  chevron_right: ChevronRight,
  plus: Plus,
  xmark: Xmark,
  circle_check: CircleCheck,
  circle_exclamation: CircleExclamation,
  circle_xmark: CircleXmark,
  circle_user: CircleUser,
  sun: Sun,
  moon: Moon,
  ellipsis_vertical: EllipsisVertical, 
  trash: Trash,
  right_from_bracket: RightFromBracket,
  pen_to_square: PenToSquare,
  bars: Bars,
  play: Play,
  database: Database,
  signal: Signal,
}

export type IconName = keyof typeof icons

export { icons }
export { default } from "@/components/icon/components/Icon"
