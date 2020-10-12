import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const UX = {
  text: (
    <L.Div _block _items>
      <L.P>Кнопка&nbsp;&mdash; простейший элемент взаимодействия с&nbsp;интерфейсом. Она должна приглашать пользователя к&nbsp;определенному действию и&nbsp;инициировать события по&nbsp;клику.</L.P>
      <L.P _item>Форма стандартной кнопки&nbsp;&mdash; прямоугольник без заданных размеров. Ширина устанавливается в&nbsp;зависимости от&nbsp;названия. Внутри кнопки с&nbsp;классом .button-wrapper по&nbsp;умолчанию установлены отступы 5px по&nbsp;вертикали и&nbsp;19px по&nbsp;горизонтали.</L.P>
    
      <L.Button
        _item
      >
        Продолжить
      </L.Button>
      <L.P>Обычная кнопка используется, когда от&nbsp;пользователя не&nbsp;требуется никаких других действий и&nbsp;он&nbsp;движется по&nbsp;странице последовательно. Рядом с&nbsp;кнопками другого цвета она принимает значение &laquo;отмены&raquo; действия.</L.P>
      <L.Button
        _success
        _item
      >
        Cохранить
      </L.Button>
      <L.P>Зеленая кнопка с&nbsp;классом success не&nbsp;только одобряет действие пользователя, но&nbsp;и&nbsp;инициирует согласие с&nbsp;изменениями.</L.P>
      <L.Button
        _warning
        _item
      >
        Добавить
      </L.Button>
      <L.P>Оранжевая кнопка с&nbsp;классом warning, как элемент предупреждения, требующего обратить особое внимание к&nbsp;ее&nbsp;функции, используется для добавления на&nbsp;страницу новых сущностей. Это может быть новый объект, строка таблицы или аккаунт.</L.P>
      <L.Button
        _danger
        _item
      >
        Удалить
      </L.Button>
      <L.P>Красная кнопка с&nbsp;классом danger означает ошибку или необратимое действие. Такой яркий акцент используется в&nbsp;интерфейсе редко, поскольку максимально привлекает к&nbsp;себе внимание и&nbsp;в&nbsp;то&nbsp;же время отталкивает от&nbsp;немедленного нажатия на&nbsp;нее. Для пользователя красная кнопка может означать, что своим действием он&nbsp;немедленно оборвет какой-то процесс.</L.P>
      <L.H3>Кнопки с&nbsp;счетчиком</L.H3>
      <L.P>Круглый каунтер, помещенный внутрь button, обозначает количество новых событий, произошедших в&nbsp;рамках действия кнопки. Вне зависимости от&nbsp;цветового определения кнопки счетчик несет только информативный смысл.</L.P>
      <L.Button
        _danger
        _item
      >
        Удалить&nbsp;
        <L.Span
          _count
        >
          8
        </L.Span>
      </L.Button>

      <L.H3>Кнопка с&nbsp;прелоадером</L.H3>
      <L.P>Если для завершения операции, вызванной кликом на&nbsp;кнопку, требуется длительное время, для кнопки button указывается атрибут <b>isLoading</b>, который добавляет внутрь элемента анимированную иконку прелоадера, показывающая, что операция находится в&nbsp;процессе. На&nbsp;время совершения операции кнопка остается неактивной. </L.P>
      <L.Button
        _danger
        _item
        isLoading
      >
        Подождите
      </L.Button>
      <L.H3>Неактивная кнопка</L.H3>
      <L.P>Атрибут <b>isDisabled</b> для кнопки button переводит ее&nbsp;в&nbsp;неактивное состояние и&nbsp;означает, что дальнейшие операции невозможны, пока не&nbsp;выполнены некоторые условия. Данный атрибут уместно использовать для кнопок форм.</L.P>
      <L.P>В&nbsp;некоторых случаях элемент управления можно не&nbsp;показывать до&nbsp;получения необходимых данных. </L.P>
      <L.P>В&nbsp;случаях, когда пользователь не&nbsp;обладает правами на&nbsp;использование кнопки, ее&nbsp;следует скрывать&nbsp;&mdash; все лишние отвлекающие элементы должны быть убраны из&nbsp;поля зрения пользователя, если он&nbsp;не&nbsp;может их&nbsp;использовать.</L.P>
      <L.Button
        _success
        isDisabled
      >
        Отправить
      </L.Button>
    </L.Div>
  ),
  source: componentSrc,
};
