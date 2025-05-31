import Header from './components/Header'
import Item from './components/Item'

function App() {
  return (
    <>
      <Header />
      <section>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mx-auto max-w-7xl p-8 gap-8">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </section> 
    </>
  )
}

export default App
 