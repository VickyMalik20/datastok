import { supabase } from "../../../lib/supabaseClient";

const handler = async (req, res) => {
    const { id, quantity, tanggal, transaksi, description } = req.body;

    try {
        if (!quantity || !tanggal || !transaksi || !description) {
            return res
                .status(400)
                .json({ message: 'Input harus diisi semua' });
        }

        const { data, error } = await supabase
            .from('reject_beras')
            .update({
                Quantity: quantity,
                Tanggal: tanggal,
                Transaksi: transaksi,
                Description: description
            })
            .eq('id', id);

        if (error) {
            throw new Error(error.message);
        }

        return res.json(data);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;
