import React from 'react'
import { useState } from 'react'

import Input from '../components/UI/inputs/Input'
import GameBigCard from '../components/cards/GameBigCard'

import styles from './Main.module.scss'
import { useDispatch } from 'react-redux'
import {
  PanelVariant,
  addPanel,
} from '../redux/slices/floatingPanelsQueueSlice'

interface IGameBigCard {
  name: string
  imgSrc: string
  aboutGame: string
  to: string
  newGame: boolean
}

const gameBigCards: IGameBigCard[] = [
  {
    name: 'FarCry Primal',
    imgSrc: 'farcry/large.jpg',
    aboutGame:
      'Компьютерная игра в жанре action-adventure со структурой открытого мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft Toronto, Ubisoft Kiev...',
    to: '/',
    newGame: false,
  },
  {
    name: 'FarCry Primal',
    imgSrc: 'farcry/large.jpg',
    aboutGame:
      'Компьютерная игра в жанре action-adventure со структурой открытого мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft Toronto, Ubisoft Kiev...',
    to: '/',
    newGame: true,
  },
  {
    name: 'FarCry Primal',
    imgSrc: 'farcry/large.jpg',
    aboutGame:
      'Компьютерная игра в жанре action-adventure со структурой открытого мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft Toronto, Ubisoft Kiev...',
    to: '/',
    newGame: false,
  },
]

function Main() {
  const [searchValue, setSearchValue] = useState<string>('')

  const dispatch = useDispatch()

  return (
    <>
      <div className={['wrapper', styles.main].join(' ')}>
        <section className={styles.section}>
          <div className={styles.section__header}>
            <h2 className={styles.section__headerText}>Популярное</h2>
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Введите название"
              classNames={{
                wrapper: styles.section__searchInputWrapper,
                input: styles.section__searchInput,
              }}
            />
          </div>
          <div
            className={styles.section__contentWrapper}
            onClick={() =>
              dispatch(
                addPanel({
                  item: { type: PanelVariant.textNotification, text: 'Привет' },
                })
              )
            }
          >
            <div className={styles.section__contnet}>
              {gameBigCards.map((gameBigCard, index) => (
                <GameBigCard
                  key={index}
                  name={gameBigCard.name}
                  imgSrc={gameBigCard.imgSrc}
                  aboutGame={gameBigCard.aboutGame}
                  to={gameBigCard.to}
                  newGame={gameBigCard.newGame}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Main
