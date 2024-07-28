import { descListTermVariant } from 'components'

interface desc {
  term: string
  definition: string | string[]
  termVariant?: descListTermVariant
  onClickDefinition?: (
    event?: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void
}

export interface DescriptionListProps {
  descs: desc[]
  classNames?: {
    list?: string
    term?: string
    definition?: string
    listItem?: string
  }
}
