import { useEffect, useState } from 'react'

import Input from '../components/UI/inputs/Input'
import GameBigCard from '../components/cards/GameBigCard'

import styles from './Main.module.scss'

interface MainProps {
  addNewFloatingPanel?: () => void
  setPageName: (name: string) => void
}

function Main({ addNewFloatingPanel = () => {}, setPageName }: MainProps) {
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    setPageName('Главная')
  }, [])

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
          <div className={styles.section__contentWrapper}>
            <div className={styles.section__contnet}>
              <GameBigCard
                name="FarCry Primal"
                imgSrc="farcry/large.jpg"
                aboutGame="Компьютерная игра в жанре action-adventure со структурой открытого мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft Toronto, Ubisoft Kiev..."
                to="/"
              />
              <GameBigCard
                name="FarCry Primal"
                imgSrc="farcry/large.jpg"
                aboutGame="Компьютерная игра в жанре action-adventure со структурой открытого мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft Toronto, Ubisoft Kiev..."
                to="/"
              />
              <GameBigCard
                name="FarCry Primal"
                imgSrc="farcry/large.jpg"
                aboutGame="Компьютерная игра в жанре action-adventure со структурой открытого мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft Toronto, Ubisoft Kiev..."
                to="/"
              />
              <GameBigCard
                name="FarCry Primal"
                imgSrc="farcry/large.jpg"
                aboutGame="Компьютерная игра в жанре action-adventure со структурой открытого мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft Toronto, Ubisoft Kiev..."
                to="/"
              />
              <GameBigCard
                name="FarCry Primal"
                imgSrc="farcry/large.jpg"
                aboutGame="Компьютерная игра в жанре action-adventure со структурой открытого мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft Toronto, Ubisoft Kiev..."
                to="/"
              />
              <GameBigCard
                name="FarCry Primal"
                imgSrc="farcry/large.jpg"
                aboutGame="Компьютерная игра в жанре action-adventure со структурой открытого мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft Toronto, Ubisoft Kiev..."
                to="/"
              />
              <GameBigCard
                name="FarCry Primal"
                imgSrc="farcry/large.jpg"
                aboutGame="Компьютерная игра в жанре action-adventure со структурой открытого мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft Toronto, Ubisoft Kiev..."
                to="/"
              />
              <GameBigCard
                name="FarCry Primal"
                imgSrc="farcry/large.jpg"
                aboutGame="Компьютерная игра в жанре action-adventure со структурой открытого мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft Toronto, Ubisoft Kiev..."
                to="/"
              />
              <GameBigCard
                name="FarCry Primal"
                imgSrc="farcry/large.jpg"
                aboutGame="Компьютерная игра в жанре action-adventure со структурой открытого мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft Toronto, Ubisoft Kiev..."
                to="/"
              />
              <GameBigCard
                name="FarCry Primal"
                imgSrc="farcry/large.jpg"
                aboutGame="Компьютерная игра в жанре action-adventure со структурой открытого мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft Toronto, Ubisoft Kiev..."
                to="/"
              />
              <GameBigCard
                name="FarCry Primal"
                imgSrc="farcry/large.jpg"
                aboutGame="Компьютерная игра в жанре action-adventure со структурой открытого мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft Toronto, Ubisoft Kiev..."
                to="/"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Main
