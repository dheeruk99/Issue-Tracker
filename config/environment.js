const development = {
  name: "development",
  asset_path: "assets",
  db: "Tracker_developemnt",
  db_url: process.env.TRACKER_DB_URl,
};

const production = {
  asset_path: process.env.TRACKER_ASSET_PATH,
  db: process.env.TRACKER_DB,
  db_url: process.env.TRACKER_DB_URl,
};

module.exports =
  eval(process.env.NODE_ENV) == undefined
    ? development
    : eval(process.env.NODE_ENV);
