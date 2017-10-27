using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace POS_GasStationPharmacy.Models
{

    public class PGSDbContext:DbContext
    {
        public PGSDbContext() : base(nameOrConnectionString: "PostgreSql") { }
        public virtual DbSet<pharmaceutical_house> pharmaceutical_house { get; set; }
    }
}