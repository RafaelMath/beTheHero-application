
//create table
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
     
        table.increments();
     
     table.string('title').notNullable();
     table.string('description').notNullable();
     table.decimal('value').notNullable();

     //chave estrangeira = foreign key
     table.string('ong_id').notNullable();
     
     //reference foreign key on column 'id' on table 'ongs'
     table.foreign('ong_id').references('id').inTable('ongs')
     });
 };
 
 //delete table
 exports.down = function(knex) {
   return knex.schema.dropTable('incidents');
 };