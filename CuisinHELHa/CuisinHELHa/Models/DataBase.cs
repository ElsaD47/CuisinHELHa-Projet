using System.Data.SqlClient;

namespace CuisinHELHa.Models
{
    public class DataBase
    {
        private static readonly string CONNECTION_STRING = @"Server=DESKTOP-P4NUFUP;Integrated Security = SSPI;DataBase=recipe";

        public static SqlConnection GetConnection()
        {
            return new SqlConnection(CONNECTION_STRING);
        }
        
        
        
        
    }
    
    
}