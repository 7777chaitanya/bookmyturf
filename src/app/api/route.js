import { NextResponse } from "next/server";
import fs from "fs";

const Reader = require("@maxmind/geoip2-node").Reader;

export async function GET(req) {
  console.log(
    "received page land event from client",
    req,
    req.headers.get("x-forwarded-for"),
    __dirname,
    process.cwd(),
    req.headers.get("user-agent")
  );
  // let ip = req.headers.get("x-forwarded-for");
  let ip = "2406:7400:45:66f:45dd:76c4:9f90:41ab"

  // let lookupResult = undefined;

  // lookupResult = geoip.lookup(ip);
  // console.log("LOOKUP RESULT", lookupResult);

  // Reader.open(`${process.cwd()}/src/app/api/GeoLite2-Country.mmdb`).then(
  //   (reader) => {
  //     const response = reader.country("128.101.101.101");

  //     console.log("RESPONSE COUNTRY CODE", response, response.country, response.city);
  //   }
  // );

  // Reader.open(`${process.cwd()}/src/app/api/GeoLite2-City.mmdb`).then(
  //   (reader) => {
  //     const response = reader.city(ip);

  //     console.log(
  //       "RESPONSE CITY CODE",
  //       response,
  //       response.country,
  //       response.city
  //     );
  //   }
  // );

  // reading country and city

  const dbBuffer = fs.readFileSync(
    `${process.cwd()}/src/app/api/GeoLite2-City.mmdb`
  );
  const reader = Reader.openBuffer(dbBuffer);
  const response = reader.city(ip);

  console.log("RESPONSE CITY CODE", response, response.country, response.city);

  // reading asn

  const dbBufferasn = fs.readFileSync(
    `${process.cwd()}/src/app/api/GeoLite2-ASN.mmdb`
  );
  const readerasn = Reader.openBuffer(dbBufferasn);
  const responseasn = readerasn.asn(ip);

  console.log("RESPONSE ASN", responseasn);

  return NextResponse.json({
    status: "Page land event Logged",
    ip: req.headers.get("x-forwarded-for"),
    country: response.country,
    city: response.city,
    // lookupResult: lookupResult,
  });
}
