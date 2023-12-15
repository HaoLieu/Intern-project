namespace ApiVuejs.Models
{
    public class Container
    {
        public int ContainerId { get; set; }
        public string ContainerTitle { get; set; } = string.Empty;
        public string ContainerProperties { get; set; } = string.Empty;
        public string ContainerIcon { get; set; } = string.Empty;
    }
}
