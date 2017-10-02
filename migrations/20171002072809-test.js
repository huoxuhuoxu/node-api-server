var dbm;
var type;
var seed;

exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
    console.log(dbm, type, seed);
};

exports.up = function(db, callback) {
	db.createTable('test', {
		id: {
			type: 'int',
			primaryKey: true,
			autoIncrement: true,
			unsigned: true,
			notNull: true
		},
		text: {
			type: 'string'
		}
	}, callback);
};

exports.down = function(db) {
	return db.dropTable('test');
};

exports._meta = {
    "version": 1
};
