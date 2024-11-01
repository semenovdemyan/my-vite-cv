import './Me.module.css';
import styles from './Me.module.css';
import imgUrl from '../../assets/images/me.jpg';
export const Me = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['textContainer']}>
        <p>
          Привет, меня зовут Демьян!
          <br />
          <br />
          Я&nbsp;&mdash; Web-разработчик из&nbsp;Санкт-Петербурга, который
          хочет, чтобы в&nbsp;мире было больше удобных и&nbsp;красивых
          интерфейсов. Мой путь в&nbsp;веб-разработке начался, когда один
          из&nbsp;моих друзей показал мне, что можно делать всего лишь
          с&nbsp;помощью редактора кода и&nbsp;домашнего ПК. С&nbsp;тех пор
          я&nbsp;освоил множество технологий, получил первый{' '}
          <strong>коммерческий опыт</strong>, и&nbsp;с&nbsp;удовольствием
          использую их&nbsp;для воплощения креативных идей в&nbsp;жизнь.
          Я&nbsp;верю, что пользовательский опыт&nbsp;&mdash; это ключ
          к&nbsp;успеху любого проекта, поэтому всегда стремлюсь создавать
          интуитивно понятные и&nbsp;отзывчивые интерфейсы. Кроме того,
          я&nbsp;очень хочу развивать навыки, связанные с&nbsp;Motion
          и&nbsp;анимацией.
          <br />
          <br />
          Когда я&nbsp;не&nbsp;пишу код, я&nbsp;люблю кататься по&nbsp;городам
          или заснеженным склонам, изучая новые места, что помогает мне
          оставаться вдохновленным и&nbsp;находить свежие идеи для своих
          проектов.
          <br />
          <br />
          Давайте вместе сделаем круто!😎
        </p>
      </div>
      <div className={styles['photoContainer']}>
        <img className={styles['photo']} src={imgUrl} alt="my photo" />
      </div>
    </div>
  );
};
