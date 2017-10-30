using POS_GasStationPharmacy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace POS_GasStationPharmacy.Controllers
{
    public class ValuesController : ApiController
    {
        PGSDbContext _context;
        public ValuesController()
        {
            _context = new PGSDbContext();
        }
        // GET api/values
        public IEnumerable<string> Get()
        {
            var data = _context.pharmaceutical_house.ToList();
            
            foreach (var cust in data)
            {
                Console.WriteLine(cust.id_pharmaceutical_house + " " + cust.name + " " + cust.active);
            }

            return new string[] { data[0].name.ToString() };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
