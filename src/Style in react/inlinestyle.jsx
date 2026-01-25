function App(){
    const card={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        backgroundColor: '#f0f0f0',
        color: '#d73c3c',
        fontFamily: 'Arial, sans-serif',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        margin: '20px',
    };
    return(
        <div style={card}>
            <h1 >Hello World</h1>
        </div>
    )
}
export default App;