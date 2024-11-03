import { supabase } from "../../../lib/supabaseClient";

const handler = async (req, res) => {
    const { quantity, tanggal, transaksi, description } = req.body;

    // Logging data yang diterima
    console.log('Data yang diterima:', req.body);

    try {
        if (!quantity || !tanggal || !transaksi || !description) {
            return res.status(400).json({ message: 'Input harus diisi semua' });
        }

        const { data, error } = await supabase
            .from('broken')
            .insert([{
                Quantity: quantity,
                Tanggal: tanggal,
                Transaksi: transaksi,
                Description: description,
            }]);

        if (error) {
            console.error('Error inserting data:', error);
            return res.status(500).json({ message: error.message });
        }

        return res.status(201).json(data);
    } catch (e) {
        console.error('Unexpected error:', e);
        return res.status(500).json({ message: e.message });
    }
};

export default handler;
