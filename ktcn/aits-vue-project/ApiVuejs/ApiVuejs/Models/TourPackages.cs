namespace ApiVuejs.Models
{
    public class TourPackages
    {
        public int PackageId { get; set; }
        public string PackageName { get; set; } = string.Empty;
        public string PackagePic { get; set; } = string.Empty;
        public string PackageLength { get; set; } = string.Empty;
        public int PackagePrice { get; set; }
    }
}
