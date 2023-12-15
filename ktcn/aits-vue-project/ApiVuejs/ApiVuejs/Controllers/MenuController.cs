using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient; //Down System.Data.SqlClient
using ApiVuejs.Models;

namespace ApiVuejs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private readonly IConfiguration _configuration;


        public MenuController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select id, name, link from dbo.Menu";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AitsDbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Menu mn)
        {
            string query = @"insert into dbo.Menu (name, link) 
                                                values (@name, @link)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AitsDbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@name", mn.name);
                    myCommand.Parameters.AddWithValue("@link", mn.link);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Add Successfully");
        }

        [HttpPut]
        public JsonResult Put(Menu mn)
        {
            string query = @"update dbo.Menu 
                             set name = @name,
                             link = @link
                             where id = @id";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AitsDbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", mn.id);
                    myCommand.Parameters.AddWithValue("@name", mn.name);
                    myCommand.Parameters.AddWithValue("@link", mn.link);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Update Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from dbo.Menu 
                             where id = @id";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AitsDbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Delete Successfully ");
        }
    }
}
