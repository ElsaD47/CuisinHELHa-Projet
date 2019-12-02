using System.Data.SqlClient;

namespace CuisinHELHa.Models
{
    public class DataBase
    {
        private static readonly string CONNECTION_STRING = @"Server=cuisinhelha.database.windows.net;
                                                            Database=recipes; 
                                                            User Id=Elsa; 
                                                            Password=cuisinHELHa3BI; 
                                                            Trusted_Connection=False; 
                                                            MultipleActiveResultSets=true";

        public static SqlConnection GetConnection(){
        
            SqlConnection connection = new SqlConnection(CONNECTION_STRING);
            return connection;
    }
        
        
        
        
    }
    
    
}