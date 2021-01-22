import './App.css';
import Customer from './components/Customer'

const customers=[
{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'yoonseok',
  'birthday':'970130',
  'gender':'male',
  'job':'student'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'someone1',
  'birthday':'111111',
  'gender':'male',
  'job':'student'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'asdfds3',
  'birthday':'222222',
  'gender':'female',
  'job':'student'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c=>{
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />);
        })
      }
    </div>  
    );
}

export default App;
