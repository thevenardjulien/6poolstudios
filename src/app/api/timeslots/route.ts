import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { RowDataPacket } from 'mysql2'

export async function GET(request: Request) {
  console.log('API route called')
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date')
  console.log('Date reçue:', date)

  try {
    let query = 'SELECT * FROM timeslots WHERE is_available = 1'
    const params: string[] = []

    if (date) {
      query += ' AND DATE(start_time) = ?'
      params.push(new Date(date).toISOString().split('T')[0])
    }

    console.log(
      'Exécution de la requête:',
      query,
      'avec les paramètres:',
      params,
    )

    const [rows] = await pool.query<RowDataPacket[]>(query, params)
    console.log('Résultats de la requête:', rows)

    return NextResponse.json(rows)
  } catch (error) {
    console.error(
      'Erreur détaillée lors de la récupération des plages horaires:',
      error,
    )
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des plages horaires.' },
      { status: 500 },
    )
  }
}
