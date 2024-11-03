import { supabase } from "../../../lib/supabaseClient";

const handler = async (_, res) => {
    try {
        // Mendapatkan semua data dari tabel keuangankas
        const { data: results, error } = await supabase
            .from('bs_5')
            .select('*')
            .order('id', { ascending: true });

        if (error) {
            throw new Error(error.message);
        }

        let dataIn = [];
        let dataOut = [];
        let totalIn = 0;
        let totalOut = 0;

        // Memisahkan transaksi 'IN' dan 'OUT' dan menghitung total Quantity
        results.forEach((list) => {
            if (list.Transaksi === 'IN') {
                dataIn.push(list);
                totalIn += list.Quantity;
            } else {
                dataOut.push(list);
                totalOut += list.Quantity;
            }
        });

        // Menyusun respons
        let response = {
            in: dataIn,
            out: dataOut,
            totalIN: totalIn,
            totalOut: totalOut,
            data: results
        };

        return res.json(response);

    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export default handler;
