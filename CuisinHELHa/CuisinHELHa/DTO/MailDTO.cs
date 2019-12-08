namespace CuisinHELHa.DTO
{
    public class MailDTO
    {
        public int UserID { get; set; }
        public string Mail { get; set; }

        public MailDTO(int userId, string mail)
        {
            UserID = userId;
            Mail = mail;
        }

        public MailDTO(){}
    }
}