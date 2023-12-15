using System;

namespace ApiVuejs.Models
{
    public class VnAirlinesNews
    {
        public int vnaId { get; set; }
        public string origin { get; set; } = string.Empty;
        public string title { get; set; } = string.Empty;
        public string url { get; set; } = string.Empty;
        public DateTime dateUpload { get; set; }
        public DateTime dateTimeUpload { get; set; }
        public int views { get; set; }
        public string author { get; set; } = string.Empty;
        public string description { get; set; } = string.Empty;
        public string img { get; set; } = string.Empty;
        public string note { get; set; } = string.Empty;
        public string rest { get; set; } = string.Empty;
    }
}
