class collection{
    constructor(item){
        this.data=item
    }

   async create(obj){
       try{
        
        let newData =await this.data.create(obj)
        return newData
       }
       catch(error){
       console.error();
       }
    }

    async read(id){

        try{
            let records = null;
            if (id) {
                // get specific row
                records = await this.data.findOne({where: {id: id }});
            } else {
                // get all data
                records = await this.data.findAll();
            }
            return records;
        } catch(e) {
            console.error('error read the record(s) for model: ', this.data.name, `id: ${id}`)
        }
    }

    async update(id,obj){
        try{
        
        let found =await this.data.findOne({where:{id}})
        let updateData= await found.update(obj);
        return updateData
        }
        catch(error){
            console.error('error deleting the record for model: ', this.data.name, `id: ${id}`);
            }
    }

    async delete(id){
        try{
        
        let deleteData=await this.data.destroy({where: {id}});
        return deleteData
        }
        catch(error){
            console.error('error deleting the record for model: ', this.data.name, `id: ${id}`);
            }
    }

}

module.exports=collection