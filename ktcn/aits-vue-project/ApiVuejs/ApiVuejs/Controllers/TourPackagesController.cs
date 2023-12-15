using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.IO;
using System;
using ApiVuejs.Models;

namespace ApiVuejs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TourPackagesController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;  // CHo Photo


        public TourPackagesController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select PackageId, PackageName, PackageLength, PackagePic, PackagePrice from dbo.TourPackages";
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
        public JsonResult Post(TourPackages tpk)
        {
            string query = @"insert into dbo.TourPackages (PackageName, PackageLength, PackagePic, PackagePrice) 
                                                values (@PackageName, @PackageLength, @PackagePic, @PackagePrice)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@PackageName", tpk.PackageName);
                    myCommand.Parameters.AddWithValue("@PackageLength", tpk.PackageLength);
                    myCommand.Parameters.AddWithValue("@PackagePic", tpk.PackagePic);
                    myCommand.Parameters.AddWithValue("@PackagePrice", tpk.PackagePrice);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Add Successfully");
        }

        [HttpPut]
        public JsonResult Put(TourPackages tpk)
        {
            string query = @"update dbo.TourPackages   
                             set PackageName = @PackageName,
                             PackageLength = @PackageLength,
                             PackagePic = @PackagePic,
                             PackagePrice = @PackagePrice
                             where PackageId = @PackageId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@PackageId", tpk.PackageId);
                    myCommand.Parameters.AddWithValue("@PackageName", tpk.PackageName);
                    myCommand.Parameters.AddWithValue("@PackagePic", tpk.PackagePic);
                    myCommand.Parameters.AddWithValue("@PackagePrice", tpk.PackagePrice);
                    myCommand.Parameters.AddWithValue("@PackageLength", tpk.PackageLength);
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
            string query = @"delete from dbo.Package 
                             where PackageId = @PackageId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@PackageId", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Delete Successfully ");
        }

        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }
                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("anonymous.png");
            }
        }
    }
}
