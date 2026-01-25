import style from './External.module.css';
function App() {
    return (
        <div className={style.header}>
            <h1>Hello, React!</h1>
         <div>
               <button className={style.btn}>New Button</button>
         </div>
        </div>
        
    );
}
export default App;