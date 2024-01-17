const express = require('express')
// const connectDB = require('./Db/dbmongo')
const knex = require('./connet.knex')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// connectDB()

app.get('/yotin', async (req, res) => {
    const park = await knex.select().table('sb_vendor')
    console.log(park)
    return res.status(200).json(park)
})
app.post('/yotin', async (req, res) => {
    const { branch_no, ven_code, ven_code_run, pre_name, ven_name, contact_name, add_name, add_no, add_moo
        , add_soi, add_trog, add_road, add_tumbol, add_amphur, add_provid, add_province, add_zip, add_tel, add_fax
        , add_email, vengroup_code, vat_type, vat_code, ven_discount, ven_ship_term, ven_ct_code, ven_credit_term
        , ven_credit_limit, ven_balance, contact_fdate, contact_ldate, cancel_date, rec_memo, ordering_date, ordering_cycle
        , AF_Status, ven_balance_cs, tax_id, tax_branch_id, tax_branch, dealercode, add_date, add_time, edit_date, edit_time
        , add_tel1_ext, add_fax_ext, vender_type, add_phone, sap_no } = req.body;
    const yotin = await knex('sb_vendor').insert({
        branch_no: branch_no,
        ven_code: ven_code,
        ven_code_run: ven_code_run,
        pre_name: pre_name,
        ven_name: ven_name,
        contact_name: contact_name,
        add_name: add_name,
        add_no: add_no,
        add_moo: add_moo,
        add_soi: add_soi,
        add_trog: add_trog,
        add_road: add_road,
        add_tumbol: add_tumbol,
        add_amphur: add_amphur,
        add_provid: add_provid,
        add_province: add_province,
        add_zip: add_zip,
        add_tel: add_tel,
        add_fax: add_fax,
        add_email: add_email,
        vengroup_code: vengroup_code,
        vat_type: vat_type,
        vat_code: vat_code,
        ven_discount: ven_discount,
        ven_ship_term: ven_ship_term,
        ven_ct_code: ven_ct_code,
        ven_credit_term: ven_credit_term,
        ven_credit_limit: ven_credit_limit,
        ven_balance: ven_balance,
        contact_fdate: contact_fdate,
        contact_ldate: contact_ldate,
        cancel_date: cancel_date,
        rec_memo: rec_memo,
        ordering_date: ordering_date,
        ordering_cycle: ordering_cycle,
        AF_Status: AF_Status,
        ven_balance_cs: ven_balance_cs,
        tax_id: tax_id,
        tax_branch_id: tax_branch_id,
        tax_branch: tax_branch,
        dealercode: dealercode,
        add_date: add_date,
        add_time: add_time,
        edit_date: edit_date,
        edit_time: edit_time,
        add_tel1_ext: add_tel1_ext,
        add_fax_ext: add_fax_ext,
        vender_type: vender_type,
        add_phone: add_phone,
        sap_no: sap_no
    })


    // 
    console.log(yotin)
    return res.status(200).send('ได้นะ')
    // ที่ไหน แว 
})
app.get('/yotin/:id', async (req, res) => {
    // console.log(req.params.id)
    const park = await knex('sb_vendor')
    .where('branch_no','>',req.params.id)
    return res.status(200).send(park)
})
// อัพเดท
app.put('/yotin/:id', async (req, res) => {
   const yotin = await knex('sb_vendor')
        .where({
            branch_no: req.params.id
        })
        .update({
            ven_code: "panta",
            pre_name:"ก็มาดิค้าบ"
        })
        return res.status(200).send('อัพเดทได้แล้วนะ')
})
// ลบ
app.delete('/yotin/:id',async(req,res)=>{
    const yotin = await knex('sb_vendor')
    .where ({
        branch_no:req.params.id
    })
    .del()
    return res.status(200).send('คุณได้ลบออกแล้วนะ')
})
// นับจำนวน
app.get('/yotincount/:count',async(req,res)=>{
    const yotin = await knex('sb_vendor')
    .count()
    .where({
        ven_code_run:req.params.count
    })
    return res.status(200).json(yotin)
})


app.listen(3050, () => console.log('Vendor Run!'))