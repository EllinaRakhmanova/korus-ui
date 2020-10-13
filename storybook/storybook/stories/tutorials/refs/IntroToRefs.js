/* eslint-disable react/prop-types */
import React from 'react';
import * as L from '@korus/leda';

export const IntroToRefs = () => (
  <L.Div _refs-wrapper _inner _box>
    <L.H1 _title>Рефы и DOM</L.H1>
    <br />
    <L.H3 _txtGray>Рефы дают возможность получить доступ к DOM-узлам или React-элементам, созданным в рендер-методе.</L.H3>
    <br />
    <L.P>
      В обычном потоке данных <L.Span _colored>React</L.Span> родительские компоненты могут взаимодействовать с
      дочерними только через <L.Span _colored>props</L.Span>.
      Чтобы модифицировать потомка, вы должны заново отрендерить его с новыми <L.Span _colored>props</L.Span>.
      Тем не менее, могут возникать ситуации, когда вам требуется императивно изменить дочерний элемент, обойдя обычный поток данных.
      Подлежащий изменениям дочерний элемент может быть как React-компонентом, так и
      DOM-элементом. <L.Span _colored>React</L.Span> предоставляет лазейку для обоих случаев.
    </L.P>
    <br />
    <L.H3>Когда использовать рефы</L.H3>
    <br />
    <L.P>Ситуации, в которых использования рефов является оправданным:</L.P>
    <L.Ul disc>
      <L.Li>Управление фокусом, выделение текста или воспроизведение медиа.</L.Li>
      <L.Li>Императивный вызов анимаций.</L.Li>
      <L.Li>Интеграция со сторонними DOM-библиотеками.</L.Li>
    </L.Ul>
    <br />
    <L.P>Избегайте использования рефов в ситуациях, когда задачу можно решить декларативным способом.</L.P>
    <br />
    <L.P>
      Например, вместо того чтобы определять методы <L.Span _colored>open()</L.Span> и <L.Span _colored>close()</L.Span> в
      компоненте <L.Span _colored>Dialog</L.Span>, лучше передавать ему проп <L.Span _colored>isOpen</L.Span>.
    </L.P>
    <br />
    <L.H3>Не злоупотребляйте рефами</L.H3>
    <br />
    <L.P>
      Возможно, с первого взгляда вам показалось, что рефы применяются, когда нужно решить какую-то задачу в
      вашем приложении «во что бы то ни стало». Если у вас сложилось такое впечатление, сделайте паузу и обдумайте,
      где должно храниться конкретное состояние в иерархии компонентов. Часто становится очевидно, что правильным местом
      для хранения состояния является верхний уровень в иерархии.
    </L.P>
  </L.Div>
);
