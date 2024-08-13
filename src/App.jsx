import './App.css'
import Search from './components/Search'
import MainContent from './components/MainContent';
import WeatherContextProvider from './contexts/WeatherContextProvider';

function App() {
	return (
		<WeatherContextProvider>

			<section className='font-mono h-full w-full bg-center bg-no-repeat bg-cover'>
				<h1 className='w-full text-center text-3xl pt-6 font-extrabold'>Weather Details</h1>

				<Search />
				<MainContent />

			</section>
		</WeatherContextProvider>
	)
}

export default App
