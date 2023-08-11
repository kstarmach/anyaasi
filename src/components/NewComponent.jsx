import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const NewComponent = ({ count, setCount }) => {
    return (
        <>
            <div className='flex text-4xl m-0'>
                <a href="https://vitejs.dev" target="_blank" className=''>
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1 className='font-extrabold'>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)} className='mb-3'>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default NewComponent;