import './App.css';
import Navigation from './components/Navigation/Navigation';
import AppRoutes from './routes/AppRoutes'; // Asumo que defines las rutas aquí
import { BrowserRouter as Router } from 'react-router-dom'; // Asegúrate de importar esto

function App() {

    return (
        <div className='App'>
            <Router>
                <Navigation />
                <main id='content'>
                    <AppRoutes />  {/* Aquí deberían ir todas las rutas */}
                </main>
            </Router>
        </div>
    );
}

export default App;
