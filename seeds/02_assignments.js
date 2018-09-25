exports.seed = function(knex) {
    return knex('assignments').del()
        .then(() => {
            return knex('assignments').insert([

                {
                    assassins_id: 3,
                    contract_id: 3
                },
                {
                    assassins_id: 1,
                    contract_id: 2
                },
                {
                    assassins_id: 5,
                    contract_id: 3
                },
                {
                    assassins_id: 2,
                    contract_id: 1
                }
            ]);
        });
};