/**
 * TestController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

    index: function(req, res, next) {
        console.log("id:" + req.body.id);
        Test.findOne({id: req.body.id}, function foundTest(err, test) {
                if(!test) {
                    console.log('Test not found. CREATE IT!');
                    Test.create(req.body).exec(function testCreated(err, newTest){
                        if(err) {
                            console.log(err);
                        }
                        else if(newTest){

                            console.log("add success");
                        }
                        else {
                            console.log("could not add");
                        }
                    });
                } else {
                    console.log('Test found. UPDATE IT!');
                    Test.update(test.id, req.body).exec(function testUpdated(err, updatedTest){
                        if(err) {
                            console.log(err);
                        }
                        else if(updatedTest){
                            console.log("update success");
                        } else {
                            console.log("could not update!");
                        }
                    });
                }
                
        });
        res.send('DONE');
    }
};
