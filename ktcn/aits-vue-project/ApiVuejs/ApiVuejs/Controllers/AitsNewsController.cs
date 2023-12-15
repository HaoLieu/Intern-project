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
    public class AitsNewsController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;  // CHo Photo

        public AitsNewsController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select aitsId, origin, title, url, convert(varchar(10),dateUpload,120) as dateUpload, dateTimeUpload,
                           views, author, description, img, note, rest from dbo.AitsNews";
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
        public JsonResult Post(AitsNews uns)
        {
            string query = @"insert into dbo.AitsNews (origin, title, url, dateUpload,
                            dateTimeUpload, views, author, description, img, note, rest) 
                           values (@origin, @title, @url, @dateUpload,
                            @dateTimeUpload, views, @author, @description, @img, @note, @rest)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AitsDbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@origin", uns.origin);
                    myCommand.Parameters.AddWithValue("@title", uns.title);
                    myCommand.Parameters.AddWithValue("@url", uns.url);
                    myCommand.Parameters.AddWithValue("@dateUpload", uns.dateUpload);
                    myCommand.Parameters.AddWithValue("@dateTimeUpload", uns.dateTimeUpload);
                    myCommand.Parameters.AddWithValue("@views", uns.views);
                    myCommand.Parameters.AddWithValue("@author", uns.author);
                    myCommand.Parameters.AddWithValue("@description", uns.description);
                    myCommand.Parameters.AddWithValue("@img", uns.img);
                    myCommand.Parameters.AddWithValue("@note", uns.note);
                    myCommand.Parameters.AddWithValue("@rest", uns.rest);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Add Successfully");
        }

        [HttpPut]
        public JsonResult Put(AitsNews uns)
        {
            string query = @"update dbo.AitsNews
                             set origin = @origin,
                             title = @title,
                             url = @url,
                             dateUpload = @dateUpload,
                             dateTimeUpload = @dateTimeUpload,
                             views = @views,
                             author = @author,
                             description = @description,
                             img = @img,
                             note = @note,
                             rest = @rest
                             where aitsId = @aitsId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AitsDbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@aitsId", uns.aitsId);
                    myCommand.Parameters.AddWithValue("@origin", uns.origin);
                    myCommand.Parameters.AddWithValue("@title", uns.title);
                    myCommand.Parameters.AddWithValue("@url", uns.url);
                    myCommand.Parameters.AddWithValue("@dateUpload", uns.dateUpload);
                    myCommand.Parameters.AddWithValue("@dateTimeUpload", uns.dateTimeUpload);
                    myCommand.Parameters.AddWithValue("@views", uns.views);
                    myCommand.Parameters.AddWithValue("@author", uns.author);
                    myCommand.Parameters.AddWithValue("@description", uns.description);
                    myCommand.Parameters.AddWithValue("@img", uns.img);
                    myCommand.Parameters.AddWithValue("@note", uns.note);
                    myCommand.Parameters.AddWithValue("@rest", uns.rest);
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
            string query = @"delete from dbo.AitsNews
                             where aitsId = @aitsId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AitsDbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@aitsId", id);
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