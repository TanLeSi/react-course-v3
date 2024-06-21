import MenuItem from "./MenuItem"

const MenuList = ({ menuItems }) => {
  return (
    <div className="section-center">
      {
        menuItems.map((dish) => {
          return (
            <MenuItem key={dish.id} dish={dish} />
          )
        })
      }
    </div>
  )
}

export default MenuList
