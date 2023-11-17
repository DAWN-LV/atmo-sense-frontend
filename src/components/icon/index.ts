import Gauge from '@/components/icon/svg/gauge.svg?raw'
import Bell from '@/components/icon/svg/bell.svg?raw'
import Microchip from '@/components/icon/svg/microchip.svg?raw'

const icons = {
  gauge: Gauge,
  bell: Bell,
  microchip: Microchip,
}

export type IconName = keyof typeof icons

export { icons }
