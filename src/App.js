import './App.css';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories';
import Expense from './components/Expense';
import Menu from './components/Menu';

function App() {

    const categories = [
        {
            id: uuidv4(),
            title: "Food",
            description: "All that we buy to eat in grocery stores and cafes"
        },
        {
            id: uuidv4(),
            title: "Apartment",
            description: "Rented fees and ather payments for accomodation",
        },
        {
            id: uuidv4(),
            title: "Clothes",
            description: "Clothes, bags, shoes, hats etc.",
        },
        {
            id: uuidv4(),
            title: "Health care",
            description: "Vitamins, sports nutrition, gym, fittness",
        },
        {
            id: uuidv4(),
            title: "Telefon and internet",
            description: "Cellphone payments, home internet",
        },
        {
            id: uuidv4(),
            title: "Insurance",
            description: "Health, life and car insurance etc.",
        },
        {
            id: uuidv4(),
            title: "Car",
            description: "Filling, washing, maintenance",
        },
        {
            id: uuidv4(),
            title: "Entertament",
            description: "Cinema, restaurants, exibitions",
        },
    ]

    const expenses = [
        {
            id: uuidv4(),
            date: "5.01.2023",
            value: 120,
            category: "Food",
            description: "Ralphs grocery store"
        },
        {
            id: uuidv4(),
            date: "6.01.2023",
            value: 2550,
            category: "Apartment",
            description: "landlord"
        },
        {
            id: uuidv4(),
            date: "6.01.2023",
            value: 94,
            category: "Clothes",
            description: "Zara"
        },
        {
            id: uuidv4(),
            date: "6.01.2023",
            value: 175,
            category: "Clothes",
            description: "Macy`s"
        },
        {
            id: uuidv4(),
            date: "8.01.2023",
            value: 65,
            category: "Telefon and internet",
            description: "At&t"
        },
        {
            id: uuidv4(),
            date: "8.01.2023",
            value: 875,
            category: "Insurance",
            description: "The J. Morey Company"
        },
        {
            id: uuidv4(),
            date: "9.01.2023",
            value: 88,
            category: "Food",
            description: "Ralphs grocery store"
        },
        {
            id: uuidv4(),
            date: "10.01.2023",
            value: 55,
            category: "Health care",
            description: "Vitamine shoppe"
        },
        {
            id: uuidv4(),
            date: "11.01.2023",
            value: 23,
            category: "Food",
            description: "7 Eleven"
        },
        {
            id: uuidv4(),
            date: "11.01.2023",
            value: 55,
            category: "Health care",
            description: "LA Fitness"
        },
        {
            id: uuidv4(),
            date: "11.01.2023",
            value: 55,
            category: "Entertainment",
            description: "Cinemark Playa Vista and XD"
        },
        {
            id: uuidv4(),
            date: "12.01.2023",
            value: 65,
            category: "Car",
            description: "Auto Fuels Gas Station"
        },
        {
            id: uuidv4(),
            date: "12.01.2023",
            value: 115,
            category: "Entertament",
            description: "The Roof on Wilshire"
        },
        {
            id: uuidv4(),
            date: "11.01.2023",
            value: 23,
            category: "Food",
            description: "Traders Joes"
        },
        {
            id: uuidv4(),
            date: "12.01.2023",
            value: 17,
            category: "Car",
            description: "Joe Bell Express Car Wash"
        },
    ]

const menu = [
    {
        id: uuidv4(),
        title: 'Income',
    },
    {
        id: uuidv4(),
        title: 'Expenses',
    },
    {
        id: uuidv4(),
        title: 'Investment',
    },
    {
        id: uuidv4(),
        title: 'Saving',
    }
]

    return (
            <div>
                <Menu menu={menu}/>
                <h1>Expenses:</h1>
                <div className="row align-items-start">
                    {categories.map(el => <Categories key={el.id} categorie={el}
                    expenses={expenses}
                    />)}
                </div>
        </div>
    );
}

export default App;
