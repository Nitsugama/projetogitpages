import { Reservation } from '../App';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Calendar, ArrowLeft, X } from 'lucide-react';

interface ReservationManagementProps {
  reservations: Reservation[];
  onUpdateReservation: (id: string, updates: Partial<Reservation>) => void;
  onCancelReservation: (id: string) => void;
  onBack: () => void;
}

export function ReservationManagement({
  reservations,
  onCancelReservation,
  onBack,
}: ReservationManagementProps) {
  const activeReservations = reservations.filter(r => r.status === 'active');
  const cancelledReservations = reservations.filter(r => r.status === 'cancelled');

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
        <h1>Minhas Reservas</h1>
        <p className="text-muted-foreground">
          Gerencie suas reservas de jogos
        </p>
      </div>

      <div className="space-y-6">
        {/* Reservas Ativas */}
        <div>
          <h2 className="mb-4">Reservas Ativas</h2>
          {activeReservations.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  Você não tem reservas ativas no momento.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {activeReservations.map((reservation) => (
                <Card key={reservation.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{reservation.gameName}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <Calendar className="h-4 w-4" />
                          {formatDate(reservation.date)}
                        </CardDescription>
                      </div>
                      <Badge variant="default">Ativa</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onCancelReservation(reservation.id)}
                      className="w-full"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Cancelar Reserva
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Reservas Canceladas */}
        {cancelledReservations.length > 0 && (
          <div>
            <h2 className="mb-4">Reservas Canceladas</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cancelledReservations.map((reservation) => (
                <Card key={reservation.id} className="opacity-60">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{reservation.gameName}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <Calendar className="h-4 w-4" />
                          {formatDate(reservation.date)}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">Cancelada</Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}