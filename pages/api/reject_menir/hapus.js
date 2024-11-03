import { supabase } from "../../../lib/supabaseClient";

const handler = async (req, res) => {
    const { id } = req.query;

    try {
        if (!id) {
            return res.status(400).json({ message: '`id` tidak ditemukan' });
        }

        const { data, error } = await supabase
            .from('reject_menir')
            .delete()
            .eq('id', id);

        if (error) {
            throw new Error(error.message);
        }

        res.json(data);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;
