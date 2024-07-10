import { GamesPrivacyInterface } from '../Scheme/interfaces/GamesPrivacyInterface'
import { InventoryPrivacyInterface } from '../Scheme/interfaces/InventoryPrivacyInterface'
import { MessagesPrivacyInterface } from '../Scheme/interfaces/MessagesPrivacyInterface'
import { ProfilePrivacyInterface } from '../Scheme/interfaces/ProfilePrivacyInterface'

export interface PrivacyInterface {
  games: GamesPrivacyInterface
  inventory: InventoryPrivacyInterface
  messages: MessagesPrivacyInterface
  profile: ProfilePrivacyInterface
}
