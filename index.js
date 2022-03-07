//Массив с данными о постах
let posts = [
  {id: 1, post: 'Hi, how are you?', likeCount: 0},
  {id: 2, post: 'It is my first post', likeCount: 23},
]

//Массив с данными о диалогах
let dialogs = [
  {id: 1, name: 'Misha'},
  {id: 2, name: 'Dima'},
  {id: 3, name: 'Aleksandr'},
  {id: 4, name: 'Petr'},
  {id: 5, name: 'Grisha'},
  {id: 6, name: 'Masha'}
]

//Массив с данными о сообщениях
let messages = [
  {id: 1, message: 'Hello!'},
  {id: 2, message: 'Hi!'},
  {id: 3, message: 'How are you?'},
  {id: 4, message: 'Fine, and you?'},
]

//Рендер основного компонента, принимающего и передающего данные с массивов
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
); 
