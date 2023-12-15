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
    public class ContactController : ControllerBase
    {
        private readonly IConfiguration _configuration;


        public ContactController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select ContactId, AddressInfo, Email, PhoneNum from dbo.Contact";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
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
        public JsonResult Post(Contact cnt)
        {
            string query = @"insert into dbo.Contact (AddressInfo, Email, PhoneNum) 
                                                values (@AddressInfo, @Email, @PhoneNum)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@AddressInfo", cnt.AddressInfo);
                    myCommand.Parameters.AddWithValue("@Email", cnt.Email);
                    myCommand.Parameters.AddWithValue("@PhoneNum", cnt.PhoneNum);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Add Successfully");
        }

        [HttpPut]
        public JsonResult Put(Contact cnt)
        {
            string query = @"update dbo.Contact 
                             set AddressInfo = @AddressInfo,
                             Email = @Email,
                             PhoneNum = @PhoneNum
                             where ContactId = @ContactId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ContactId", cnt.ContactId);
                    myCommand.Parameters.AddWithValue("@AddressInfo", cnt.AddressInfo);
                    myCommand.Parameters.AddWithValue("@PhoneNum", cnt.PhoneNum);
                    myCommand.Parameters.AddWithValue("@Email", cnt.Email);
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
            string query = @"delete from dbo.Contact 
                             where ContactId = @ContactId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ContactId", id);
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
