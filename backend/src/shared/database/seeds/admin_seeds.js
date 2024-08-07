/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('types_user').del();
  await knex('users').del();

  const types = await knex('types_user')
    .insert([
      { description: 'admin' },
      { description: 'secretary' },
      { description: 'financial' },
    ])
    .returning('*');

  const adminIndex = types.find(it => it.description === 'admin');

  //senha admin -> 111111
  await knex('users').insert([
    {
      name: 'Administrador',
      email: 'admin@admin.com',
      password: '$2b$08$XE/JstgdvsziFjQXviMPhOk9Y7Ddu4N2XSFE3TuaN6dFK7iJ.Kipi',
      whatsapp: '19999999999',
      username: ' admin ',
      type_id: adminIndex.id,
    },
  ]);
};
