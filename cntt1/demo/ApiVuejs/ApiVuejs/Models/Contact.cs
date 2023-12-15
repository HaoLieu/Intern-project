namespace ApiVuejs.Models
{
    public class Contact
    {
        public int ContactId { get; set; }
        public string AddressInfo { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNum { get; set; } = string.Empty;
    }
}
