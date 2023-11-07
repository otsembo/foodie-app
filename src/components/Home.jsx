import MealItem from "./MealItem";

function Home({ search, formattedSearchItems }){
    return(
        <div className='row'>
        {/*meal of the day */}
        <div className='col-4'>
          <MealItem
            className="col-12"
            imageUrl="https://www.themealdb.com/images/media/meals/kos9av1699014767.jpg"
            mealName="Lamb Pilaf (Plov)"
            mealDesc="Place the raisins and prunes into a small bowl and pour over enough water to cover."
          >
          </MealItem>
        </div>
        {/*meal of the day end*/}

        {/*search results */}
        <div className='col-8'>
          <p>Search Results for {search}, ({formattedSearchItems.length})</p>
          <div className='row'>
            {formattedSearchItems}
          </div>
        </div>
        {/*search results end*/}
      </div>
    )
}

export default Home;