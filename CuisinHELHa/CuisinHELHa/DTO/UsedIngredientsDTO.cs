namespace CuisinHELHa.DTO
{
    public class UsedIngredientsDTO
    {
        public int IdIngredient { get; set; }
        
        public int IdRecipe { get; set; }
        
        public short Quantity { get; set; }

        public UsedIngredientsDTO()
        {
        }

        public UsedIngredientsDTO(int idIngredient, int idRecipe, short quantity)
        {
            IdIngredient = idIngredient;
            IdRecipe = idRecipe;
            Quantity = quantity;
        }
    }
}